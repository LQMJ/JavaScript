### flex
> 原理： 操作父级盒子来控制子级 
         一般来说给父级添加属性，操作子级display flex 
  - display flex 
  - 单行：控制主轴
    + justifly-content:center;整体居中(主轴居中)
    + align-items:center;(侧轴居中)
    + justifly-content：flex-end;整体右对齐
    + justifly-content：flex-start;整体左对齐
    + justifly-content：space-between;第一个和最后一个顶着父级的边，其他平均分配
    + justify-content：space-around;每个元素之间的左右距离平均分布
    + justifly-content：space-evenly;每个元素和每个元素之间左右距离平均分布
### 对齐方式
   - align-item:flex-start; 默认左上对齐
   - align-item:flex-end; 底部对齐
   - align-item:baseline; 文本对齐
   - align-item:stretch(没有设置高度的会被拉扯)
   - 多行对齐
     + align-content:flex-start 默认左上对齐
     + align-content:flex-end  底部对齐
     + align-items:baseline
     + 拉扯:align-items:stretch(没有设置高度的会被拉扯)