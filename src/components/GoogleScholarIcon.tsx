// src/components/GoogleScholarIcon.tsx
export default function GoogleScholarIcon({
  size = 24,
}: {
  size?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="currentColor"
    >
      <g transform="scale(1.5) translate(-10, -10)">
        {/* Mortarboard */}
        <polygon points="32,12 12,26 32,40 52,26" />

        {/* Head */}
        <circle cx="32" cy="40" r="10" />
      </g>
    </svg>
  );
}
