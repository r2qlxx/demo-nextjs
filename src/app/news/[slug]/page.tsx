import CustomIcon from "@/components/CustomIcon";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import Link from "next/link";
import { BsArrowLeft, BsPersonCircle } from "react-icons/bs";

const fetchSinglePost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch a sigle post.");
  }
  const data = await res.json();
  return data;
}

const fetchUser = async (userId: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user data.");
  }
  const data = await res.json();
  return data;
}

const SingleNews = async ({ params }: { params: { slug: string } }) => {
  const singlePost = await fetchSinglePost(params.slug as string);
  const user = await fetchUser(singlePost.userId);

  return (
    <MaxWidthContainer>
      <div className="flex flex-col gap-12">
        <Link href="/news" className="w-max">
          <CustomIcon Icon={BsArrowLeft} style="text-2xl cursor-pointer p-2 rounded-full hover:bg-gray-50" />
        </Link>
        <div className="flex flex-col gap-12 p-2">
          <p className="text-sm text-end">DD/MM/YYYY</p>
          <div className="flex items-center gap-4">
            <CustomIcon Icon={BsPersonCircle} style="text-2xl text-blue-500" />
            <p>{user.name}</p>
          </div>
          <h1 className="text-3xl font-bold">{singlePost.title}</h1>
          <p className="text-lg">{singlePost.body}</p>
        </div>
      </div>
    </MaxWidthContainer>
  )
}
export default SingleNews