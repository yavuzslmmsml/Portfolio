import useReveal from '../hooks/useReveal';

export default function RevealSection({ as: Tag = 'section', className = '', children, ...props }) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-700 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      {...props}
    >
      {children}
    </Tag>
  );
}
