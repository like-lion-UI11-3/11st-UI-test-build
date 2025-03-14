import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html", // 기본 index.html
        hyongju: "src/components/cha-hyongju/index.html",
        dongfa: "src/components/choi-donghwan/index.html",
        soonhyuk: "src/components/hong-soonhyuk/index.html",
        yerin: "src/components/hong-yerin/index.html",
        jisu: "src/components/kim-jisu/index.html",
      },
    },
  },
  appType: "mpa", // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
