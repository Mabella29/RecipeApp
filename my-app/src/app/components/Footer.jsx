import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row mt-6 gap-6 p-6 bg-gray-50">
      <div className="flex-1">
        <img src="/Images/Cookpal 1.svg" alt="Cookpal logo" className="mb-4" />
        <p>
          Cookpal is a recipe website with a <br />
          wide variety of delicious recipes, <br />
          easy-to-use search function. Join <br />
          our community and let's cook <br />
          together!
        </p>
      </div>

      <div className="flex-1 flex flex-col">
        <h2 className="font-semibold text-lg mb-2">Company</h2>
        <Link href="/" className="hover:text-green-500 hover:font-bold">
          Home
        </Link>
        <Link href="/explore" className="hover:text-green-500 hover:font-bold">
          Explore
        </Link>
        <Link href="/team" className="hover:text-green-500 hover:font-bold">
          Team
        </Link>
        <Link href="/about" className="hover:text-green-500 hover:font-bold">
          About Us
        </Link>
        <Link href="/activity" className="hover:text-green-500 hover:font-bold">
          Activity
        </Link>
      </div>

      <div className="flex-1 flex flex-col">
        <h2 className="font-semibold text-lg mb-2">Resources</h2>
        <Link href="/blog" className="hover:text-green-500 hover:font-bold">
          Blog
        </Link>
        <Link href="/use-cases" className="hover:text-green-500 hover:font-bold">
          Use Cases
        </Link>
        <Link href="/testimonials" className="hover:text-green-500 hover:font-bold">
          Testimonials
        </Link>
        <Link href="/insights" className="hover:text-green-500 hover:font-bold">
          Insights
        </Link>
      </div>

      <div className="flex-1">
        <img src="/Images/Cookpal 1.svg" alt="Cookpal logo" className="mb-4" />
        <p className="mb-4">
          Ut risus mattis interdum faucibus facilisi. <br />
          Facilisi purus accumsan aliquam.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Subscribe
        </button>
      </div>
    </footer>
  );
}
