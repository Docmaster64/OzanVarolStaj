import type { MetaFunction } from "@remix-run/node";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const meta: MetaFunction = () => [
  { title: "Blog - Ozan Varol" },
  { name: "description", content: "Ozan Varol. Get a free audio training from Ozan and learn 3 simple strategies to make giant leaps in your life and work." },
];

const featuredPost = {
  title: "I didn’t plan this. It planned me.",
  url: "https://ozanvarol.com/i-didnt-plan-this-it-planned-me/",
  img: "https://ozanvarol.com/wp-content/uploads/2026/06/geoffrey-moffett-TFRezw7pQwI-unsplash.jpg",
  excerpt:
    "Earlier this year, a fully formed opening scene dropped into my head—the way you’d see one in a movie theater. I could see the faces. I could hear the dialogue. I knew exactly how the scene would play. I’ve learned to follow these whispers when they come. I didn’t sit down and decide to write […]",
  category: "Life Lessons",
};

const recentPosts = [
  {
    title: "People keep asking about our marriage",
    url: "https://ozanvarol.com/people-keep-asking-about-our-marriage/",
    img: "https://ozanvarol.com/wp-content/uploads/2026/06/crop-scaled.png",
    excerpt:
      "My wife Kathy and I were at a retreat recently. A woman I’d just met came up to me between sessions. “It’s amazing watching you watch Kathy talk,” she said. “Your face lights up. You hang on every word like it’s the most interesting thing in the world.” “Because it is,” I said. People ask […]",
    category: "Life Lessons",
  },
  {
    title: "The best of what I’m reading, watching, and exploring (June 2026)",
    url: "https://ozanvarol.com/the-best-of-what-im-reading-watching-and-exploring-june-2026/",
    img: "https://ozanvarol.com/wp-content/uploads/2020/07/books-in-black-wooden-book-shelf-159711-scaled.jpg",
    excerpt:
      "Once a month, I share the best of what I’ve been reading, watching, and exploring. Enjoy! Books Slow Days, Fast Company by Eve Babitz (1977). A love letter to 1970s Los Angeles, written by a woman who lived it more than almost anyone. She dated Jim Morrison, Harrison Ford, and Steve Martin, and turned all […]",
    category: "Motivation",
  },
  {
    title: "The best of what I’m reading, watching, and exploring (May 2026)",
    url: "https://ozanvarol.com/the-best-of-what-im-reading-watching-and-exploring-may-2026/",
    img: "https://ozanvarol.com/wp-content/uploads/2020/07/books-in-black-wooden-book-shelf-159711-scaled.jpg",
    excerpt:
      "Once a month, I share the best of what I’ve been reading, watching, and exploring. Enjoy! Books, films, ideas, and the occasional rabbit hole worth falling down. Here’s what’s been on my radar this month […]",
    category: "Motivation",
  },
];

const categories = [
  { name: "Creativity", url: "https://ozanvarol.com/creativity/" },
  { name: "Life Lessons", url: "https://ozanvarol.com/life-lessons/" },
  { name: "Problem Solving", url: "https://ozanvarol.com/problem-solving/" },
  { name: "Decision Making", url: "https://ozanvarol.com/decision-making/" },
  { name: "Productivity", url: "https://ozanvarol.com/productivity/" },
  { name: "Motivation", url: "https://ozanvarol.com/motivation/" },
  { name: "Failure", url: "https://ozanvarol.com/failure/" },
  { name: "Personal Development", url: "https://ozanvarol.com/personal-development/" },
];

export default function Blog() {
  return (
    <>
      <Navigation />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title">The Blog</h1>
          <p className="page-subtitle">Weekly insights on innovation, creativity, and rethinking the status quo</p>
        </div>
      </section>

      <section className="featured-post">
        <div className="container">
          <div className="featured-post-container">
            <div className="featured-post-image">
              <img src={featuredPost.img} alt={featuredPost.title} />
            </div>
            <div className="featured-post-content">
              <span className="post-category">{featuredPost.category}</span>
              <h2 className="featured-post-title">{featuredPost.title}</h2>
              <p className="featured-post-excerpt">{featuredPost.excerpt}</p>
              <a href={featuredPost.url} target="_blank" className="btn-primary">Read Article &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-posts">
        <div className="container">
          <h3 className="section-title">Recent Posts</h3>
          <div className="posts-grid">
            {recentPosts.map((post) => (
              <article className="post-card" key={post.url}>
                <div className="post-card-image">
                  <a href={post.url} target="_blank">
                    <img src={post.img} alt={post.title} />
                  </a>
                </div>
                <div className="post-card-content">
                  <span className="post-category">{post.category}</span>
                  <h4 className="post-card-title">
                    <a href={post.url} target="_blank">{post.title}</a>
                  </h4>
                  <p className="post-card-excerpt">{post.excerpt}</p>
                  <a href={post.url} target="_blank" className="post-link">Read More &rarr;</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-categories">
        <div className="container">
          <h3 className="section-title">Browse by Category</h3>
          <ul className="categories-list">
            {categories.map((cat) => (
              <li className="category-item" key={cat.url}>
                <a href={cat.url} target="_blank" className="category-link">
                  {cat.name}
                  <span className="category-arrow" aria-hidden="true">&rarr;</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="load-more-wrap">
            <a href="https://ozanvarol.com/blog/page/2/" target="_blank" className="btn-primary">Load More Posts &rarr;</a>
          </div>
        </div>
      </section>

      <section className="newsletter-cta">
        <div className="container">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Never Miss an Article</h3>
            <p className="newsletter-text">Join 50K+ readers who get my latest insights delivered straight to their inbox every week. Takes 3 minutes to read. Takes longer to shake.</p>
            <form className="newsletter-form" id="blogNewsletterForm">
              <input type="email" placeholder="Enter your email address" required className="newsletter-input" />
              <button type="submit" className="btn-primary">Subscribe &rarr;</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}