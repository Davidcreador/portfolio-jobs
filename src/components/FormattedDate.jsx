export function FormattedDate({ date, ...props }) {
  return (
    <time {...props}>
      {date}
    </time>
  )
}
