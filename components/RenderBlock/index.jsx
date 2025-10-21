'use client'
import { marked } from 'marked'
import { twMerge } from 'tailwind-merge'

export default function RenderMarkdownBlock({ content, className, props }) {
	const html = marked(content)

	return (
		<div
			className={twMerge('markdown', className)}
			dangerouslySetInnerHTML={{ __html: html }}
			{...props}
		/>
	)
}
