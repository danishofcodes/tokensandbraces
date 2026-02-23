import PinboardCard from "../Pinboard/PinboardCard";
import { posts } from "../../data/posts";
import { useState } from "react";
export default function PinboardSection() {


return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="grid md:grid-cols-2 gap-6">

      {posts.map((post)=>{

 return   <PinboardCard
            highlight={post.must}
          tags={post.tags}
          title={post.title}
          description={post.description}
          href={post.hyperlink}
          isVideo={post.isVideo}        />
      })} 
      

           </div>
    </section>
  );
}