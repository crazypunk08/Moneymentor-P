<html>
  <body>
    <!-- ... Your HTML and CSS -->

    <script type="importmap">
      {
        "imports": {
          "@google/generative-ai": "https://esm.run/@google/generative-ai"
        }
      }
    </script>
    <script type="module">
      import { GoogleGenerativeAI } from "@google/generative-ai";

      // Fetch your API_KEY
      const API_KEY = "...";

      // Access your API key (see "Set up your API key" above)
      const genAI = new GoogleGenerativeAI(API_KEY);

      // ...

      // The Gemini 1.5 models are versatile and work with most use cases
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

      // ...
    </script>
  </body>
</html>