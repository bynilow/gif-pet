export interface IGif {
    type: string;
    id: string;
    url: string;
    embed_url: string;
    username: string;
    title: string;
    import_datetime: string;
    user: {
        username: string;
        display_name: string;
        description: string;
        is_verified: boolean;
        avatar_url: string;
        banner_url: string;
    }
}