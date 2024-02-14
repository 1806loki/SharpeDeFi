const posts = [
    {
      id: 1,
      title: "Understanding DeFi: A Beginner's Guide",
      href: "#",
      description:
        "Discover the basics of decentralized finance (DeFi) and learn how you can leverage this innovative technology to take control of your financial future.",
      date: "Feb 11, 2024",
      datetime: "2024-02-11",
      category: { title: "Cryptocurrency", href: "#" },
      author: {
        name: "Emily Johnson",
        role: "Blockchain Analyst",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      id: 2,
      title: "The Future of Finance: Exploring DeFi Trends",
      href: "#",
      description:
        "Explore the latest trends shaping the decentralized finance (DeFi) landscape and how they are revolutionizing the traditional financial industry.",
      date: "Jan 25, 2024",
      datetime: "2024-01-25",
      category: { title: "Cryptocurrency", href: "#" },
      author: {
        name: "Daniel Lee",
        role: "Financial Analyst",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1594707173731-ca0fdcaf6153?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
    {
      id: 3,
      title: "The Rise of NFTs: Exploring the New Digital Collectibles",
      href: "#",
      description:
        "Delve into the world of Non-Fungible Tokens (NFTs) and discover how these unique digital assets are reshaping the art and entertainment industries.",
      date: "Dec 18, 2023",
      datetime: "2023-12-18",
      category: { title: "Blockchain", href: "#" },
      author: {
        name: "Sophia Martinez",
        role: "Digital Artist",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  ];
  
  export default function Blog() {
    return (
      <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Explore insightful articles to stay updated with the latest trends
              and developments in the world of cryptocurrency.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 dark:border-gray-600 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time
                    dateTime={post.datetime}
                    className="text-gray-500 dark:text-gray-400"
                  >
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-700 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50 dark:bg-gray-700  object-fit"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {post.author.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
  