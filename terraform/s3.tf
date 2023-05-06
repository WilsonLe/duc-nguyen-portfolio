resource "aws_s3_bucket" "duc-nguyen-portfolio-cms-bucket" {
  bucket = "duc-nguyen-portfolio-cms-bucket"
  tags = {
    Name = "duc-nguyen-portfolio-cms-bucket"
  }
}

resource "aws_iam_user" "duc-nguyen-portfolio-cms-bucket-user" {
  name = "duc-nguyen-portfolio-cms-bucket-user"
  tags = {
    Name = "duc-nguyen-portfolio-cms-bucket-user"
  }
}

resource "aws_iam_group" "duc-nguyen-portfolio-cms-bucket-user-group" {
  name = "duc-nguyen-portfolio-cms-bucket-user-group"
}

resource "aws_iam_user_group_membership" "duc-nguyen-portfolio-cms-user-group-membership" {
  user = aws_iam_user.duc-nguyen-portfolio-cms-bucket-user.name
  groups = [
    aws_iam_group.duc-nguyen-portfolio-cms-bucket-user-group.name,
  ]
}

data "aws_iam_policy_document" "bucket-user" {
  statement {
    actions = [
      "s3:PutObject",
      "s3:GetObject",
      "s3:ListBucket",
      "s3:DeleteObject",
      "s3:PutObjectAcl"
    ]
    resources = [
      aws_s3_bucket.duc-nguyen-portfolio-cms-bucket.arn,
      "${aws_s3_bucket.duc-nguyen-portfolio-cms-bucket.arn}/*",
    ]
  }
}

resource "aws_iam_policy" "duc-nguyen-portfolio-cms-bucket-user-policy" {
  name        = "duc-nguyen-portfolio-cms-bucket-user-policy"
  description = "Policy for bucket user"
  policy      = data.aws_iam_policy_document.bucket-user.json
}

resource "aws_iam_group_policy_attachment" "duc-nguyen-portfolio-cms-bucket-user-attach" {
  group      = aws_iam_group.duc-nguyen-portfolio-cms-bucket-user-group.name
  policy_arn = aws_iam_policy.duc-nguyen-portfolio-cms-bucket-user-policy.arn
}

resource "aws_s3_bucket_ownership_controls" "duc-nguyen-portfolio-cms-bucket-ownership" {
  bucket = aws_s3_bucket.duc-nguyen-portfolio-cms-bucket.id
  rule {
    object_ownership = "ObjectWriter"
  }
}


resource "aws_s3_bucket_acl" "duc-nguyen-portfolio-cms-bucket-acl" {
  depends_on = [aws_s3_bucket_ownership_controls.duc-nguyen-portfolio-cms-bucket-ownership]
  bucket     = aws_s3_bucket.duc-nguyen-portfolio-cms-bucket.id
  acl        = "private"
}

data "aws_iam_policy_document" "allow_access_from_terraform_test_user" {
  statement {
    principals {
      type        = "AWS"
      identifiers = [aws_iam_user.duc-nguyen-portfolio-cms-bucket-user.arn]
    }
    actions = [
      "s3:PutObject",
      "s3:GetObject",
      "s3:ListBucket",
      "s3:DeleteObject",
      "s3:PutObjectAcl"
    ]
    resources = [
      aws_s3_bucket.duc-nguyen-portfolio-cms-bucket.arn,
      "${aws_s3_bucket.duc-nguyen-portfolio-cms-bucket.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_policy" "allow_access_from_terraform_test_user" {
  bucket = aws_s3_bucket.duc-nguyen-portfolio-cms-bucket.id
  policy = data.aws_iam_policy_document.allow_access_from_terraform_test_user.json
}

resource "aws_s3_bucket_public_access_block" "duc-nguyen-portfolio-cms-bucket-public-access" {
  bucket                  = aws_s3_bucket.duc-nguyen-portfolio-cms-bucket.id
  block_public_acls       = false
  ignore_public_acls      = false
  block_public_policy     = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_cors_configuration" "duc-nguyen-portfolio-cms-bucket-cors" {
  bucket = aws_s3_bucket.duc-nguyen-portfolio-cms-bucket.id
  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET"]
    allowed_origins = ["*"]
    expose_headers  = []
    max_age_seconds = 3000
  }
}
