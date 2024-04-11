type LoadingTextProps = {
  height?: string
  width?: string
  margin?: string
  padding?: string
  rounded?: string
}

const LoadingText = ({
  height = 'h-[30px]',
  width = 'w-full',
  margin,
  padding,
  rounded = 'rounded',
}: LoadingTextProps) => {
  // デフォルト値を設定
  return (
    <>
      <div
        className={`${margin} ${padding} ${rounded} ${width} ${height} bg-slate-100 wave-animation`}
      />
    </>
  )
}

export default LoadingText
