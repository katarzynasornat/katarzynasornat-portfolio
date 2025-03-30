/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/katarzynasornat-portfolio' : '',
    assetPrefix: isProd ? '/katarzynasornat-portfolio' : '',
    output: 'export',
    distDir: 'dist',
    images:{
        unoptimized: true,
        domains: ['localhost','https://katarzynasornat.github.io/katarzynasornat-portfolio'],
    }

};



export default nextConfig;


