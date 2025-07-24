import React, {useState} from "react";
import './blog.css';

const Blogs = [
  {
    img: "ai-img.jfif",
    category: "Tech",
    date: "Dec 13, 2024",
    title: "The Future of AI in Web Development",
    description: "Exploring how artificial intelligence is revolutionizing the way we build and design websites, from automated coding to intelligent user experiences.",
  },
   {
    img: "javasript.jfif",
    category: "Tech",
    date: "Dec 15, 2024",
    title: "Top JavaScript Frameworks in 2025",
    description: "Discover the most popular and powerful JavaScript frameworks developers are using this year, from React to SvelteKit.",
  },
   {
    img: "typrsript.png",
    category: "Tech",
    date: "Dec 8, 2024",
    title: "Why You Should Learn TypeScript",
    description: "Understand the advantages of TypeScript over vanilla JavaScript and how it improves large-scale app development.",
  },
   {
    img: "gems.jfif",
    category: "Travel",
    date: "Dec 8, 2024",
    title: "Hidden Gems of Southeast Asia",
    description: "Discover breathtaking destinations off the beaten path that showcase the authentic beauty and culture of Southeast Asian countries.",
  },
   {
    img: "switzerland.jfif",
    category: "Travel",
    date: "Dec 9, 2024",
    title: "Winter Magic in Switzerland",
    description: "Explore the charm of snowy Swiss towns, majestic mountains, and cozy chalets during the winter season.",
  },
   {
    img: "chery-blosom.jfif",
    category: "Travel",
    date: "Dec 19, 2024",
    title: "Cherry Blossom Season in Japan",
    description: "A traveler’s guide to experiencing Japan’s sakura season — best spots, local festivals, and tips for perfect timing.",
  },
   {
    img: "pasta.jfif",
    category: "Food",
    date: "Dec 11, 2024",
    title: "Mastering Italian Pasta at Home",
    description: "Learn the secrets of creating authentic Italian pasta from scratch with simple ingredients and traditional techniques.",
  },
   {
    img: "5 foods.jfif",
    category: "Food",
    date: "Dec 5, 2024",
    title: "5 Comfort Foods You Can Cook This Weekend",
    description: "Craving comfort? Try these five easy, hearty meals perfect for chilly nights or lazy Sundays.",
  },
   {
    img: "plant diet.jfif",
    category: "Food",
    date: "Dec 5, 2024",
    title: "The Power of a Plant-Based Diet",
    description: "Explore the benefits of eating plant-based — from better health to sustainability — and get started with simple recipes.",
  },
];

const Blog = () => {

  const [selectedCategory, setSelectedCategory]= useState('All');
  const [searchText, setSearchText]=useState('');
  const [visibleCount, setVisibleCount]= useState(6);

  const filterBlogs= Blogs.filter((blog)=>{
    const matchCategory= selectedCategory === 'All' || blog.category === selectedCategory;
    const matchSearch = blog.title.toLowerCase().includes(searchText.toLowerCase()) || blog.description.toLowerCase().includes(searchText.toLowerCase());
    return matchCategory && matchSearch;
  });

  const visibleBlogs = filterBlogs.slice(0, visibleCount);
  return (
    <div>
      <header>
        <h2>Blog Post</h2>
        <p>Personal Blog & Insight</p>
      </header>
      <div className="Main-section">
        <div className="filter-div">
          <input type="text" placeholder="Search for your Blog.." value={searchText}  className="filter" onChange={(e)=> setSearchText(e.target.value)}/>
        </div>
        <div className="categ-div">
          {['All', 'Tech', 'Travel', 'Food'].map((catg)=>(
            <p className={`categ ${selectedCategory === catg? "active": " "}`}  key={catg}  onClick={()=> setSelectedCategory(catg)}>
              {catg}
            </p>
          ))}
        </div>
      </div>
      <div className="Blogs-cards">
        {visibleBlogs.length ===0 ?(
          <p>No Blogs found!</p>
        ):
        (visibleBlogs.map((blog, index) => (
          <div className="card" key={index}>
            <img src={`/src/assets/${blog.img}`} />
            <div className="blog-txt">
              <div className="dt-ctg">
                <p className={`category ${blog.category.toLowerCase()}`}>{blog.category}</p>
                <p className="date">{blog.date}</p>
              </div>
              <h3 id="title">{blog.title}</h3>
              <p id="des">{blog.description}</p>
            </div>
          </div>
        )))}

      </div>
      <div className="more-div">
        <button onClick={()=>setVisibleCount(visibleCount+3)} className="more-btn">
            Show More
        </button>
      </div>
      {visibleBlogs< filterBlogs.length && (
         <button></button>
      )}

    </div>
  );
};

export default Blog;
