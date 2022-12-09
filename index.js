const fs = require('fs');
const path = require('path');
hexo.extend.filter.register('before_post_render', function(data){
    const { config } = this;
    //console.log(config.source_dir);
    if ('.md'.indexOf(data.source.substring(data.source.lastIndexOf('.')).toLowerCase()) > -1) {
        let regexp = /<!--\s+file_include\s+([^\s]+)\s+--\>/g
        data.content = data.content
            .replace(regexp, (sub0, file)=>{
                //return file;
                let file_path = path.join(process.env.PWD, config.source_dir, file);
                if(fs.existsSync(file_path)){
                    return fs.readFileSync(file_path, {encoding: 'utf-8'});
                }
                else{
                    return `<span style="color:red">${file_path} not exist</span>`
                }
            });
    }
  }, 0)
