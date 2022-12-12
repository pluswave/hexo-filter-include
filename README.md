# hexo-filter-include
Hexo filter plugin, for including other files before any other filter.

Assume you have some graphviz code, which you want to share both code and the output graph in html, for DRY reason, it is not a good practice to copy and paste your code twice. by using this plugin, you can do it like this:

````
 ```graphviz
 <!-- file_include graph/my.dot -->
 ```

 ```
 <!-- file_include graph/my.dot -->
 ``` 

````
and using a seperate file graph/my.dot for your input.
