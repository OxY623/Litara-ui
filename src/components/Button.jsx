function Button({
  name = 'Click me',
  variant = 'primary',
  handleClick = () => {},
  icon = null,
  disabled = false,
}) {
  const buttonStyles = {
    primary: `
    bg-[var(--color-primary)]
    hover:bg-[var(--color-primary-hover)]
    text-white
  `,
    secondary: `
    bg-[var(--color-secondary-4)]
    hover:bg-[#d94450]
    text-white
  `,
    outline: `
    border border-[var(--color-primary)]
    text-[var(--color-primary)]
    hover:bg-[var(--color-primary)] hover:text-white
  `,
    ghost: `
    text-[var(--color-primary)]
    hover:bg-[rgba(0,0,0,0.05)]
  `,
  };
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      title={name}
      className={`
        flex items-center justify-center gap-2
        px-4 py-3
        rounded-2xl
        font-medium
        transition-all duration-200
        ${buttonStyles[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {icon}
      {name}
    </button>
  );
}

export { Button };
