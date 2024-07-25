const MaxWidthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[75%] m-auto min-h-[calc(100vh-5rem)] my-12">
      {children}
    </div>
  )
}
export default MaxWidthContainer