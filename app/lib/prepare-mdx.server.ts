import { bundleMDX } from 'mdx-bundler';

const getCompiledMDX = async (source: string, directory: string) => {
  const [{ default: rehypePrism }, { default: remarkMdxImages }] = await Promise.all([
    // @ts-ignore
    import('rehype-prism-plus'),
    // @ts-ignore
    import('remark-mdx-images')
  ]);

  return bundleMDX({
    cwd: directory,
    source,
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMdxImages];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypePrism];

      return options;
    }
  });
};

export default getCompiledMDX;
