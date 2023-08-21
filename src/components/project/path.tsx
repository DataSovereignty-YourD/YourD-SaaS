export default function Path({ pathname }: { pathname: string }) {
    // 맨처음 홈 아이콘 추가
    // 아래처럼 나오게
    // {홈 아이콘}/경로 
    // 홈 클릭하면 dashboard로 넘어가게

  return (
  <div>
    {pathname}
  </div>);
}
