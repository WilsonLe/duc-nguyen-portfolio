import escapeHTML from "escape-html";
import { Text } from "slate";

export const serializeHTML = (children: any): any => {
	return children
		.map((node: any, i: number) => {
			if (Text.isText(node) as any) {
				let text = ``;

				if (node.bold) {
					text = `<strong>${text}</strong>`;
				}

				if (node.code) {
					text = `<code>${text}</code>`;
				}

				if (node.italic) {
					text = `<em>${text}</em>`;
				}

				if (node.strikethrough) {
					text = `<strike>${text}</strike>`;
				}

				return escapeHTML(node.text);
			}

			if (!node) {
				return null;
			}

			switch (node.type) {
				case "h1":
					return `<h1>${serializeHTML(node.children)}</h1>`;
				case "h2":
					return `<h2>${serializeHTML(node.children)}</h2>`;
				case "h3":
					return `<h3>${serializeHTML(node.children)}</h3>`;
				case "h4":
					return `<h4>${serializeHTML(node.children)}</h4>`;
				case "h5":
					return `<h5>${serializeHTML(node.children)}</h5>`;
				case "h6":
					return `<h6>${serializeHTML(node.children)}</h6>`;
				case "blockquote":
					return `<blockquote>${serializeHTML(node.children)}</blockquote>`;
				case "ul":
					return `ul>${serializeHTML(node.children)}</ul>`;
				case "ol":
					return `<ol>${serializeHTML(node.children)}</ol>`;
				case "li":
					return `<li>${serializeHTML(node.children)}</li>`;
				case "link":
					return `<a href="${escapeHTML(node.url)}">${serializeHTML(
						node.children
					)}</a>`;

				default:
					return `<p>${serializeHTML(node.children)}</p>`;
			}
		})
		.join("");
};
