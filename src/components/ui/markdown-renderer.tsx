"use client";

import React from "react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Simple markdown-to-HTML renderer for article content.
 * Supports: ## headers, **bold**, - lists, and paragraphs
 */
export function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const renderContent = () => {
    // Split content into blocks by double newlines
    const blocks = content.trim().split(/\n\n+/);
    
    return blocks.map((block, blockIndex) => {
      const trimmedBlock = block.trim();
      
      // Skip empty blocks
      if (!trimmedBlock) return null;
      
      // Handle headers (## Header)
      if (trimmedBlock.startsWith("## ")) {
        const headerText = trimmedBlock.replace(/^## /, "");
        return (
          <h2 key={blockIndex} className="text-2xl font-bold text-white mt-10 mb-4 first:mt-0">
            {renderInlineFormatting(headerText)}
          </h2>
        );
      }
      
      // Handle list items (lines starting with -)
      if (trimmedBlock.includes("\n-") || trimmedBlock.startsWith("-")) {
        const lines = trimmedBlock.split("\n");
        const listItems: string[] = [];
        let introText = "";
        
        for (const line of lines) {
          if (line.trim().startsWith("-")) {
            listItems.push(line.trim().replace(/^-\s*/, ""));
          } else if (listItems.length === 0) {
            introText += line + " ";
          }
        }
        
        return (
          <div key={blockIndex} className="my-6">
            {introText.trim() && (
              <p className="text-emerald-100/90 leading-relaxed mb-4">
                {renderInlineFormatting(introText.trim())}
              </p>
            )}
            <ul className="space-y-3">
              {listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3 text-emerald-100/90">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0" />
                  <span>{renderInlineFormatting(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      
      // Handle numbered lists (lines starting with 1., 2., etc.)
      if (/^\d+\.\s/.test(trimmedBlock) || trimmedBlock.includes("\n1.")) {
        const lines = trimmedBlock.split("\n");
        const listItems: string[] = [];
        
        for (const line of lines) {
          const match = line.trim().match(/^\d+\.\s*(.*)/);
          if (match) {
            listItems.push(match[1]);
          }
        }
        
        if (listItems.length > 0) {
          return (
            <ol key={blockIndex} className="space-y-3 my-6 list-decimal list-inside">
              {listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="text-emerald-100/90 leading-relaxed">
                  {renderInlineFormatting(item)}
                </li>
              ))}
            </ol>
          );
        }
      }
      
      // Regular paragraph
      return (
        <p key={blockIndex} className="text-emerald-100/90 leading-relaxed my-4">
          {renderInlineFormatting(trimmedBlock.replace(/\n/g, " "))}
        </p>
      );
    });
  };
  
  // Handle inline formatting like **bold**
  const renderInlineFormatting = (text: string): React.ReactNode => {
    // Split by **bold** pattern
    const parts = text.split(/\*\*(.*?)\*\*/g);
    
    return parts.map((part, index) => {
      // Every odd index is bold text (inside **)
      if (index % 2 === 1) {
        return (
          <strong key={index} className="text-emerald-300 font-semibold">
            {part}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className={`article-content ${className}`}>
      {renderContent()}
    </div>
  );
}
