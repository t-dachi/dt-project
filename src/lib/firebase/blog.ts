import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  getDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "./config";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
}

// Timestamp型を文字列に変換する関数
function formatDate(timestamp: Timestamp): string {
  return timestamp.toDate().toLocaleDateString("ja-JP");
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      slug: doc.id,
      title: doc.data().title,
      date: formatDate(doc.data().date),
      excerpt: doc.data().excerpt || "",
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return []; // エラー時は空配列を返す
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const docRef = doc(db, "posts", slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("記事が見つかりません");
  }

  const data = docSnap.data();
  return {
    slug: docSnap.id,
    title: data.title,
    date: formatDate(data.date),
    excerpt: data.excerpt || "",
    content: data.content,
  };
}
