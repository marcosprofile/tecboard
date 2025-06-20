export default function Container({children}) {
  return (
    <div className="flex flex-col items-start gap-8 w-full">
      {children}
    </div>
  )
}
