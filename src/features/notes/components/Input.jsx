export default function Input({ className, placeholder, value, onChange }) {
  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
