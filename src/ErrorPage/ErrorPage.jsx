import { useEffect, useRef, useState } from "react";

const ErrorPage = () => {
  const [theme, setTheme] = useState("light");
  const rootRef = useRef(document.documentElement);

  const toggleTheme = () => {
    const root = rootRef.current;

    if (theme === "dark") {
      root.style.setProperty("--bg-color", "#fff");
      root.style.setProperty("--text-color", "#000");
      setTheme("light");
    } else {
      root.style.setProperty("--bg-color", "#050505");
      root.style.setProperty("--text-color", "#fff");
      setTheme("dark");
    }
  };

  useEffect(() => {
    const root = rootRef.current;
    root.style.setProperty("--primary-color", "#faca2e");
    root.style.setProperty("--eye-pupil-color", "#050505");
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--text-color", "#000");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg-color)] text-[var(--text-color)] font-[Fira_Sans]">
      <div className="flex flex-col items-center gap-8 text-center">
        {/* Eyes */}
        <div className="flex justify-center gap-1">
          <div className="w-20 h-20 bg-[var(--primary-color)] rounded-full grid place-items-center">
            <div className="w-[30px] h-[30px] bg-[var(--eye-pupil-color)] rounded-full animate-movePupil" />
          </div>
          <div className="w-20 h-20 bg-[var(--primary-color)] rounded-full grid place-items-center">
            <div className="w-[30px] h-[30px] bg-[var(--eye-pupil-color)] rounded-full animate-movePupil" />
          </div>
        </div>

        {/* Heading */}
        <div>
          <h1 className="capitalize text-[36px] sm:text-[30px] font-medium text-[var(--primary-color)]">
            Looks like you're lost
          </h1>
          <p className="mt-2 text-[26px] sm:text-[22px] font-extralight">404 error</p>
        </div>

        {/* Button */}
        <a
          href="/"
          className="text-inherit no-underline border border-[var(--primary-color)] text-[18px] sm:text-[16px] font-extralight px-6 py-3 sm:px-5 sm:py-2 rounded-[15px] shadow-[0px_7px_0px_-2px_var(--primary-color)] transition-all duration-300 ease-in-out capitalize hover:shadow-none hover:bg-[var(--primary-color)] hover:text-white"
          aria-label="back to home"
          title="back to home"
        >
          back to home
        </a>
      </div>

      {/* Theme Toggle */}
      <button
        className="fixed top-10 right-10 bg-transparent text-[30px] sm:text-[24px] text-[var(--primary-color)] cursor-pointer border-0"
        data-theme-color-switch
        onClick={toggleTheme}
        aria-label="Switch theme"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
    </main>
  );
};

export default ErrorPage;
