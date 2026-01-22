export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string,
};

export type CommentType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
};

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: object,
    phone: string,
    website: string,
    company: object,
}

export type AlbumType = {
    userId: number,
    id: number,
    title: string,
};

export type PhotoType = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string,
};

export type TodoType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
};