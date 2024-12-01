import { createClient } from 'microcms-js-sdk';

import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";
import { queryObjects } from 'v8';

export type Member = {
    name: string;
    profile: string;
    image: MicroCMSImage;
} & MicroCMSListContent;

export type Category = {
    name: string;
} & MicroCMSListContent;

export type News = {
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage;
    category: Category;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error('MICROCMS_SERVICE_DOMAIN is required');
};

if (!process.env.MICROCMS_API_KEY) {
    throw new Error('MICROCMS_API_KEY is required');
};

const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

export const getMembersList = async (queries?: MicroCMSQueries) => {
    const listData = await client
        .getList<Member>({
            endpoint: "explanation",
            queries,
        });
    return listData;
};

export const getNewsList = async (queries?: MicroCMSQueries) => {
    const listData = await client
        .getList<News>({
            endpoint: "career",
            queries,
        });
    return listData;
};