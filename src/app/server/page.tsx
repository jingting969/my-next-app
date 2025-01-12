export default async function Page() {
    // 使用 fetch 就已经是 动态渲染了。
    // let data = await fetch('https://apifoxmock.com/m1/5718333-5400269-default/article/list')
    let data = await fetch('https://apifoxmock.com/m1/5718333-5400269-default/article/list', { cache: 'no-store' })
    let apiResult = await data.json()
    return (
      <ul>
        {apiResult.data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    )
  }