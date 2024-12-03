import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

interface PostData {
  post: {
    body: TinaMarkdownContent;
  };
}

export const MyComponent = (props: any) => {
  const { data } = useTina<PostData>(props);

  return (
    <div style={{ margin: "100px auto", width: "auto" }}>
      {data.post.body ? (
        <TinaMarkdown content={data.post.body} data-tina-field={tinaField(data.post, "body")} />
      ) : (
        <p>No content available</p>
      )}
      {/* {JSON.stringify(data?.post?.body, null, 2)} */}
    </div>
  );
};
