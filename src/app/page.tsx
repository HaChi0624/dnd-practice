import Example1 from "./components/example1/page";
import Example2 from "./components/example2/page";

export default function Home() {
  return (
    <main className="flex">
      <div>
        <text>example1</text>
        <div>参考URL: https://note.com/tabelog_frontend/n/nc9870c774386</div>
        <Example1 />
      </div>
      <div>
        <text>example2</text>
        <div>参考URL: https://github.com/Tak-Iwamoto/react-dnd-sampler/tree/main/src</div>
        {/* <Example2 /> */}
      </div>
    </main>
  );
}
