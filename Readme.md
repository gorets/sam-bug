### Introduction
I have an old project that uses СloudFormation. 

All code is in the `/src` folder, layers in the `/layers`, `package.json` in the root directory

I want to break this big project into logical modules and do each of them through SAM.

Inside the `/src` folder, I made a `/src/services` folder and I plan to create new modules (conversion, posts, users ...) in it and use SAM + esbuild for the build.

I also want to use the existing code from the `/src` folder in new services.


### Build without --manifest parameter

```bash
sam build --base-dir ./src -t ./src/new-sam-services/conversations/template.yaml --debug
```

I receive an error `FileNotFoundError: [Errno 2] No such file or directory: '/Users/wildix/Other/sam-bug/src/package.json' `


### Build with --manifest parameter

```bash
sam build --base-dir ./src -t ./src/new-sam-services/conversations/template.yaml --manifest package.json --debug
```

I receive an error:

```
CustomMakeBuilder:CopySource succeeded                                                                                                                                     
Running CustomMakeBuilder:MakeBuild                                                                                                                                        
Current Artifacts Directory : /Users/test/sam-bug/.aws-sam/build/LambdaLayer                                                                                       
executing Make: ['make', '--makefile', '/Users/test/sam-bug/package.json', 'build-LambdaLayer']                                                                    
CustomMakeBuilder:MakeBuild failed                                                                                                                                         
```


If remove `Resources -> LambdaLayer` in the template `/src/new-sam-services/conversations/template.yaml` build will be success.
