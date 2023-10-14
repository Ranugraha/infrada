interface Props {
  className?: string;
}

function DropdownSvg(props: Props) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L7 7L13 1"
        stroke="#363636"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { DropdownSvg };
