import QuoteIcon from "./QuoteIcon";

interface PraiseCardProps {
  text: string;
  author: string;
  title: string;
}

export default function PraiseCard({ text, author, title }: PraiseCardProps) {
  return (
    <div className="praise-card">
      <div className="praise-icon">
        <QuoteIcon />
      </div>
      <p className="praise-text">{text}</p>
      <p className="praise-author">{author}</p>
      <p className="praise-title">{title}</p>
    </div>
  );
}