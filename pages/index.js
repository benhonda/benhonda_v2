import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Ben Honda</title>
        <meta name="description" content="Developer, Designer, Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <nav className="py-4 w-full sm:fixed">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <a href="" className="text-sm font-medium text-gray-800 hover:opacity-80">
              benhonda.dev
            </a>
            <div className="">
              <div className=" flex items-center">
                <a href="https://github.com/benhonda" className="flex items-center space-x-2 text-gray-500 hover:opacity-80">
                  <svg className="h-3.5 w-3.5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#181717">
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>

                  <span className="text-sm">benhonda</span>
                </a>

                <div className="mx-3"></div>

                <a href="https://www.linkedin.com/in/benhonda/" className="flex items-center space-x-2 text-gray-500 hover:opacity-80">
                  <svg className="h-3.5 w-3.5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0A66C2">
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>

                  <span className="text-sm">ben honda</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="py-24 h-auto sm:h-screen flex items-center">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8">
            <h3 className="pb-4 font-semibold text-base uppercase tracking-wide text-gray-500">
              <span className="text-2xl">&#128075;</span>
              &nbsp;&nbsp;Welcome, my name is Ben.
            </h3>
            <h1 className="font-display font-medium text-5xl text-gray-800 tracking-tight leading-tight">i&#39;m a full stack developer focused on building beautiful, user-first applications.</h1>

            <div className="pt-3">
              <p className="text-lg text-gray-500">
                currently doing this for
                <svg className="inline-block w-12 -mt-1 ml-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#052FAD">
                  <title>IBM</title>
                  <path d="M23.544 15.993c.038 0 .06-.017.06-.053v-.036c0-.035-.022-.052-.06-.052h-.09v.14zm-.09.262h-.121v-.498h.225c.112 0 .169.066.169.157 0 .079-.036.129-.09.15l.111.19h-.133l-.092-.17h-.07zm.434-.222v-.062c0-.2-.157-.357-.363-.357a.355.355 0 00-.363.357v.062c0 .2.156.358.363.358a.355.355 0 00.363-.358zm-.838-.03c0-.28.212-.492.475-.492.264 0 .475.213.475.491 0 .279-.211.491-.475.491a.477.477 0 01-.475-.49zM16.21 8.13l-.216-.624h-3.56v.624zm.413 1.19l-.216-.623h-3.973v.624zm2.65 7.147h3.107v-.624h-3.108zm0-1.192h3.107v-.623h-3.108zm0-1.19h1.864v-.624h-1.865zm0-1.191h1.864v-.624h-1.865zm0-1.191h1.864v-.624h-3.555l-.175.504-.175-.504h-3.555v.624h1.865v-.574l.2.574h3.33l.2-.574zm1.864-1.815h-3.142l-.217.624h3.359zm-7.46 3.006h1.865v-.624h-1.865zm0 1.19h1.865v-.623h-1.865zm-1.243 1.191h3.108v-.623h-3.108zm0 1.192h3.108v-.624h-3.108zm6.386-8.961l-.216.624h3.776v-.624zm-.629 1.815h4.19v-.624h-3.974zm-4.514 1.19h3.359l-.216-.623h-3.143zm2.482 2.383h2.496l.218-.624h-2.932zm.417 1.19h1.662l.218-.623h-2.098zm.416 1.191h.83l.218-.623h-1.266zm.414 1.192l.217-.624h-.432zm-12.433-.006l4.578.006c.622 0 1.18-.237 1.602-.624h-6.18zm4.86-3v.624h2.092c0-.216-.03-.425-.083-.624zm-3.616.624h1.865v-.624H6.217zm3.617-3.573h2.008c.053-.199.083-.408.083-.624H9.834zm-3.617 0h1.865v-.624H6.217zM9.55 7.507H4.973v.624h6.18a2.36 2.36 0 00-1.602-.624zm2.056 1.191H4.973v.624h6.884a2.382 2.382 0 00-.25-.624zm-5.39 2.382v.624h4.87c.207-.176.382-.387.519-.624zm4.87 1.191h-4.87v.624h5.389a2.39 2.39 0 00-.519-.624zm-6.114 3.006h6.634c.11-.193.196-.402.25-.624H4.973zM0 8.13h4.352v-.624H0zm0 1.191h4.352v-.624H0zm1.243 1.191h1.865v-.624H1.243zm0 1.191h1.865v-.624H1.243zm0 1.19h1.865v-.623H1.243zm0 1.192h1.865v-.624H1.243zM0 15.276h4.352v-.623H0zm0 1.192h4.352v-.624H0Z" />
                </svg>
                &nbsp;and studying computer science at queen&#39;s university.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 sm:fixed bottom-0 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="mailto:bhonda89@gmail.com" className="text-sm font-medium tracking-tight text-gray-500 flex items-center space-x-1 hover:opacity-80">
            {/* <svg className="h-4 w-4 text-gray-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg> */}
            <span className="text-2xl">&#128587;</span>
            <span>Come say hi</span>
          </a>
          <p className="text-sm text-gray-400">&copy; benhonda.dev</p>
        </div>
      </footer>
    </div>
  );
}
