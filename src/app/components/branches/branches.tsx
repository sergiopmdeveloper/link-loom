import SingleBranch from '../single_branch/single_branch';

export default function Branches () {
  const exampleContent = 'Selena Gomez'
  const exampleSrc = 'https://ugc.production.linktr.ee/07e8b953-10eb-47b2-9654-95b5164bd563_Screenshot-2024-02-27-at-5.34.09-PM.png?io=true&size=thumbnail-stack-v1_0'
  const exampleStyle = "width: '100px'"

  return (
    <section className="flex justify-center">
      {/* 
        TODO Here we need a loop with the content of
        each row as param.
        On the other hand, we are going to define style
        of the ul at this point.
      */}
      <ul className="bg-gray-100 p-4 rounded-lg shadow-md">
        <SingleBranch content={exampleContent} imgSrc={exampleSrc} styleString={exampleStyle} />
      </ul>
    </section>
  );
};
