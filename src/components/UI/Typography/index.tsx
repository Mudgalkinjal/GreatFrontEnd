interface ITypographyProps {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'caption'
  size?: 'small' | 'medium' | 'large'
  weight?: 'normal' | 'bold'
  color?: string
  align?: 'left' | 'right' | 'center'
}

const Typography = ({
  children,
  variant = 'p',
  size = 'medium',
  weight = 'normal',
  color,
  align = 'left',
}: ITypographyProps) => {
  const styles = {
    fontSize: size === 'small' ? '12px' : size === 'large' ? '20px' : '16px',
    fontWeight: weight,
    color: color || 'inherit',
    textAlign: align,
  }
  switch (variant) {
    case 'h1':
      return <h1 style={styles}>{children}</h1>
    case 'h2':
      return <h2 style={styles}>{children}</h2>
    case 'h3':
      return <h3 style={styles}>{children}</h3>
    case 'caption':
      return <span style={styles}>{children}</span>
    case 'p':
    default:
      return <p style={styles}>{children}</p>
  }
}

export default Typography
