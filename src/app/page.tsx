import Branches from "./components/branches/branches";


export default function Home() {
  return <>
  <header>
    {/* 
      TODO This data should be obtained from database.
      In link loom is an h1 inside a div. But I think
      a header could be a better practise.
    */}
  </header>
  <div className="container mx-auto mt-8">
    <Branches />
  </div>
  <footer>
    {/*
      TODO Social Media links should be here.
      From my point of views this is a footer.
      In link loom they doesn't have that section
      tagged as a footer.
    */}
  </footer></>
}
