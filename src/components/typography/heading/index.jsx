export default function Heading({ text, size, level, colored = false, style }) {
  const variants = {
    default: {
      standard: "font-ubuntu text-primary-foreground",
      size: {
        small: "text-lg",
        medium: "text-2xl",
        large: "text-4xl"
      }
    }
  }

  switch (level) {
    case 2:
      switch (size) {
        case "small":
          return <h2 className={`${variants.default.standard} ${variants.default.size.small} ${colored && "text-secondary-foreground"} ${style}`}>{text}</h2>
        case "large":
          return <h2 className={`${variants.default.standard} ${variants.default.size.large} ${colored && "text-secondary-foreground"} ${style}`}>{text}</h2>
        default:
          return <h2 className={`${variants.default.standard} ${variants.default.size.medium} ${colored && "text-secondary-foreground"} ${style}`}>{text}</h2>
      }
    
    default:
      switch (size) {
        case "small":
          return <h1 className={`${variants.default.standard} ${variants.default.size.small} ${colored && "text-secondary-foreground"} ${style}`}>{text}</h1>
        case "large":
          return <h1 className={`${variants.default.standard} ${variants.default.size.large} ${colored && "text-secondary-foreground"} ${style}`}>{text}</h1>
        default:
          return <h1 className={`${variants.default.standard} ${variants.default.size.medium} ${colored && "text-secondary-foreground"} ${style}`}>{text}</h1>
      }
  }
}