/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {

        // SVGR Reference: https://react-svgr.com/docs/next/#usage
        const fileLoaderRule = config.module.rules.find((rule)=>
                rule.test?.test?.('.svg'),
            );
        config.module.rules.push({
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/,
        },{
            issuer: fileLoaderRule.issuer,
            resourceQuery:{
                not:[...fileLoaderRule.resourceQuery.not, /url/],
            },
            test: /\.svg$/i,
            use: ['@svgr/webpack']
            }
        )
        fileLoaderRule.exclude = /\.svg$/i
        return config
    }
};

export default nextConfig;
