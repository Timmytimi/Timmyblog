import{_ as t,r as l,o as c,c as o,a as n,b as s,d as e,e as i}from"./app-hMSRrQZq.js";const p={},u=i(`<h1 id="js高级" tabindex="-1"><a class="header-anchor" href="#js高级" aria-hidden="true">#</a> JS高级</h1><p>::: tips 前提概念</p><ol><li>什么是js高级? <ul><li>js高级是对js基础语法的一个补充说明，本质上还是对ECMAScript语法的进阶与延伸</li><li>要学习的语法没那么多,但是会更加晦涩难懂,更加侧重的是理解</li></ul></li><li>什么是面向对象编程 <ul><li>面向对象不是一门技术，而是一种解决问题的思维方式</li><li>本质是对面向过程的一种封装</li></ul></li></ol><p>:::</p><h2 id="一-代码段和作用域" tabindex="-1"><a class="header-anchor" href="#一-代码段和作用域" aria-hidden="true">#</a> 一 代码段和作用域</h2><h3 id="_1-代码段" tabindex="-1"><a class="header-anchor" href="#_1-代码段" aria-hidden="true">#</a> （1）代码段</h3><ul><li>一个<strong>script</strong>就是一个代码<strong>段</strong></li><li>一个js文件也是一个代码段</li></ul><blockquote><p>代码<strong>块</strong>：{}之间的就是代码块</p></blockquote><p>特点：</p><ol><li><strong>上面</strong>代码段定义的变量 <strong>下面</strong>的代码段<strong>可以</strong>使用</li><li><strong>下面</strong>代码段定义的变量 <strong>上面</strong>的代码段<strong>不可以</strong>使用(因为代码从上向下执行)</li><li>代码段之间<strong>互不影响</strong> 一个代码段中的错误 不会影响到另一个代码段</li><li>一个html页面中,可以存在多个代码段</li></ol><h3 id="_2-作用域" tabindex="-1"><a class="header-anchor" href="#_2-作用域" aria-hidden="true">#</a> （2）作用域</h3><p>主要作用: 隔离变量，不同作用域下同名变量不会有冲突。</p><p><img src="https://cdn.jsdelivr.net/gh/timmytimi/picture/typora/202404241822300.PNG" alt="1280X1280"></p><ul><li>全局变量(<strong>直接</strong>变量名、function函数体<strong>外</strong>的包括if/for中的var变量名)的作用范围是全局</li><li>局部变量(function函数体<strong>中用var</strong>声明的变量、function函数的<strong>形参</strong>)的作用范围是局部</li></ul><h3 id="_3-作用域链scopechain" tabindex="-1"><a class="header-anchor" href="#_3-作用域链scopechain" aria-hidden="true">#</a> （3）作用域链scopeChain</h3><blockquote><p>寻找变量的过程 叫作用域链 链式过程 （就近原则--<strong>从内向外地冒泡寻找</strong>）</p></blockquote><p>以下图的代码为例，看下作用域链上查找一个变量的查找规则：</p><ol><li>首先，在当前作用域下的执行上下文中查找对应的属性, 如果有直接返回, 否则进入2</li><li>然后，在上一级作用域的执行上下文中查找对应的属性, 如果有直接返回, 否则进入3</li><li>再次执行2的相同操作, 直到全局作用域, 如果还找不到就抛出找不到的异常</li></ol><p><img src="https://cdn.jsdelivr.net/gh/timmytimi/picture/typora/202404241822301.png" alt="output"></p><h2 id="二-预解析" tabindex="-1"><a class="header-anchor" href="#二-预解析" aria-hidden="true">#</a> 二 预解析</h2><p>浏览器不会直接执行代码，而是加工处理后再执行，这个加工处理的过程我们称之为预解析</p><h3 id="_1-预解析期间操作-提升-hoisting" tabindex="-1"><a class="header-anchor" href="#_1-预解析期间操作-提升-hoisting" aria-hidden="true">#</a> （1）预解析期间操作--提升（Hoisting）</h3><ol><li><strong>加var的变量</strong>仅声明提升 <ol><li>(函数内部的<strong>局部变量</strong>，提升到<strong>函数体</strong>的最前面)</li><li>(函数外部的<strong>全局变量</strong>，提升到<strong>代码段</strong>最前面)</li></ol></li><li><strong>function函数声明+赋值提升</strong><ol><li>(函数内部的子函数，提升到函数体的最前面)</li><li>(非函数内部的子函数，提升到代码段的最前面)</li></ol></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 预解析前</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//und</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
  <span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 预解析后</span>
<span class="token keyword">var</span> a<span class="token comment">//全局变量</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a<span class="token comment">//局部变量</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//und</span>
  a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-提升的特殊情况" tabindex="-1"><a class="header-anchor" href="#_2-提升的特殊情况" aria-hidden="true">#</a> （2）提升的特殊情况</h3><p>::: tips 函数表达式的变量提升 <strong>var</strong> <strong>gn</strong> = function () { console.log(&#39;函数&#39;); } <strong>函数表达式：提升的只是var声明的变量，而不是后面的function(){}</strong><em>// 如果碰到xxx is not a function</em><em>// 思考自己调用的位置是变量还是函数</em> :::</p><ul><li>预编译前</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>gn()
var gn = function () {
  console.log(&#39;函数&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>预编译后</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>var gn;
gn() //und()  gn is not a function
gn = function () {
  console.log(&#39;函数&#39;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: tips <strong>for循环</strong>条件中var i变量的提升 <strong>for</strong> (<strong>var i</strong> = 0; i &lt; 10; i++) {} for循环：虽然不是函数 但里面<strong>var声明</strong>的变量依旧会<strong>提升</strong> :::</p><ul><li>预编译前</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>console.log(i);//undefined
for (var i = 0; i &lt; 10; i++) {
  console.log(i);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>预编译后</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>var i;
console.log(i);//undefined
for (i = 0; i &lt; 10; i++) {
  console.log(i);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: tips var声明和function声明的<strong>重名</strong>冲突时的提升 当我们使用var声明的变量名和function声明的函数名 产生冲突的时候 <strong>函数的优先级高于var声明的变量 函数属于一等公民</strong> 总结:声明冲突时无论先后,<strong>函数优先</strong>(调用的皆是函数)，<strong>直至变量赋值后</strong>同名函数才被同名变量覆盖(函数无法再被调用) :::</p><ul><li>预编译前</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>console.log(value);
var value = 111;
function value() {
  console.log(&#39;我是一个函数&#39;);
}
console.log(value);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>预编译后</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>var value;
function value() {
  console.log(&#39;我是一个函数&#39;);//函数体
}
console.log(value); //函数体  //函数与变量同名，函数不会被仅声明的变量覆盖
value = 111;//变量赋值
console.log(value);//111  //函数被变量覆盖
value()//报错 value已经不是函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>没有使用var</strong>声明,<u><strong>不提升,属于全局变量</strong></u><em>报错：a is not defined</em></p></blockquote><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>console.log(a);//报错  Uncaught ReferenceError: a is not defined
a = 100;
console.log(a); //上面代码报错,代码停止执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>let</strong>变量声明**<u>提升但未初始化</u>** 报错：Cannot access &#39;a&#39; before initialization 初始化</p></blockquote><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>console.log(a);//Uncaught ReferenceError: Cannot access &#39;a&#39; before initialization 初始化
let a=1;
console.log(a); //上面代码报错,代码停止执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>练习题:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//编译后</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> fn<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//函数体: console.log(5);</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//5</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//5</span>
<span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//3</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//3</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-执行上下文execution-context-或函数执行环境" tabindex="-1"><a class="header-anchor" href="#三-执行上下文execution-context-或函数执行环境" aria-hidden="true">#</a> 三 执行上下文Execution Context（或函数执行环境）</h2><p><strong>数据类型</strong>:分为<strong>基本</strong>和<strong>引用</strong>。分类对内存来说，能够更合理利用存储空间</p><ul><li>基本数据类型: Number String Boolean Null Undefined</li><li>引用数据类型: Object Array Function</li></ul><p><strong>内存分区</strong>：堆区和栈区</p><ul><li><strong>基本</strong>数据类型 存放在<strong>栈区</strong>（先进后出）</li><li><strong>引用</strong>数据类型 存放在<strong>堆区</strong> 堆空间有一个对应的<strong>地址</strong> 对应的<strong>地址仍存在栈区</strong></li></ul><p>::: tips 当代码运行时，会产生一个对应的<strong>执行环境</strong>。在这个环境中，所有变量会被事先提出来（变量提升），有的直接赋值，有的为默认值 undefined(预解析) 代码<strong>从上往下开始执行</strong>，就叫做执行上下文。</p><ul><li>执行上下文就是js代码执行环境的抽象概念理解。</li><li><strong>只要</strong>代码运行，就一定在执行上下文中</li></ul><p>:::</p><h3 id="执行上下文过程" tabindex="-1"><a class="header-anchor" href="#执行上下文过程" aria-hidden="true">#</a> 执行上下文过程</h3><p>浏览器会在计算机内存中分配一块内存，专门用来供代码执行的<strong>栈</strong>内存，称作<strong>ECS</strong>执行环境栈 (ECStack) 同时会创建一个 <strong>全局对象</strong>(<strong>GO</strong> Global Object)，将内置的属性方法存放到一块单独的<strong>堆</strong>内存空间，并且使用 <strong>window</strong> 指向全局对象。</p><p>在执行代码前，还需要创建一个<strong>全局执行上下文</strong>( <strong>EC(G)</strong> ), 创建完成后，进入到栈内存中去执行( <strong>进栈</strong>)； 在当前全局执行上下文中，因为会创建很多变量并且赋值，所以会创建一个<strong>变量对象</strong> <strong>VO(Varibale Object)</strong> 来进行保存，在函数私有上下文中的变量对象叫做 <strong>活动对象</strong> <strong>AO(Activation Object)</strong> AO是私有的! AO其实就是被激活的VO。</p><p>::: tips 过程顺序</p><p>代码被浏览器解析后，形成执行上下文ECS (可以理解成杯子) 入栈： 1)当全局代码执行 产生ECG(鹅蛋，最底层的代码) 2)当函数执行的时候 产生EC(fn), 每调用一次,就产生一个局部EC (鸡蛋)</p><p>出栈: 3)当函数调用完毕之后，就出栈（内存释放）(按先进后出顺序一个一个拿出鸡蛋) 4)当全局代码没有被引用,就出栈 (鹅蛋最后才拿出)</p><p>:::</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//举例详解全过程以及VO,AO的区别</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   y<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span><span class="token comment">//把VO的x指向的堆内存改成了[100, 23]</span>
   y <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token comment">//新开了堆内存2(属于AO,是私有的)</span>
   y<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">]</span><span class="token comment">//堆内存2改成了[100, [200]]</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token comment">//[100, 23] 因为无法调用私有的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/timmytimi/picture/typora/202404241822302.gif" alt="recording"></p>`,65),d={href:"https://zhuanlan.zhihu.com/p/311196297",target:"_blank",rel:"noopener noreferrer"},r={href:"https://segmentfault.com/a/1190000009041008",target:"_blank",rel:"noopener noreferrer"},v=i(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//举例详解JS先进后出,单线程</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;begin:&#39;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">foo</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//再次调用了本函数</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end:&#39;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出结果:</span>

<span class="token comment">// begin:2</span>
<span class="token comment">// begin:1</span>
<span class="token comment">// begin:0</span>
<span class="token comment">// end:0</span>
<span class="token comment">// end:1</span>
<span class="token comment">// end:2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.jsdelivr.net/gh/timmytimi/picture/typora/202404241822303.png" alt="img"></p><h3 id="其他案例的画图分析" tabindex="-1"><a class="header-anchor" href="#其他案例的画图分析" aria-hidden="true">#</a> 其他案例的画图分析</h3><p><img src="https://cdn.jsdelivr.net/gh/timmytimi/picture/typora/202404241822304.png" alt="image-20240408231501503"></p><p><img src="https://cdn.jsdelivr.net/gh/timmytimi/picture/typora/202404241822305.png" alt="img"></p><p><img src="https://cdn.jsdelivr.net/gh/timmytimi/picture/typora/202404241822307.png" alt="image-20240409113434664"></p><p><img src="https://cdn.jsdelivr.net/gh/timmytimi/picture/typora/202404241822308.png" alt="img"></p><p><img src="https://cdn.jsdelivr.net/gh/timmytimi/picture/typora/202404241822309.png" alt="img"></p><h2 id="四-声明变量-var-let-const" tabindex="-1"><a class="header-anchor" href="#四-声明变量-var-let-const" aria-hidden="true">#</a> 四 声明变量 var|let|const</h2><ul><li>var(注意是否在函数体内--局部变量|全局变量)：变量名可重复+声明提升</li><li>let：变量名不可重复+与{}形成块级作用域+声明提升但不初始化</li><li>const(声明常量)：同let一样+只声明不赋值报错+不可重新赋值+</li></ul><h3 id="_1-加var与不加var的区别" tabindex="-1"><a class="header-anchor" href="#_1-加var与不加var的区别" aria-hidden="true">#</a> （1）加var与不加var的区别</h3><ol><li>加var的变量在预解析的时候会提升, 不加var不会提升</li><li>加var的变量可能是全局变量, 也可能是局部变量, 通过是否写在函数内区分。不加var一定是全局变量，会挂载在window上。局部变量不能通过window.xx访问。</li><li>加var的变量不能用delete()方法删除，不加var能</li></ol><h3 id="_2-let声明变量-es6" tabindex="-1"><a class="header-anchor" href="#_2-let声明变量-es6" aria-hidden="true">#</a> （2）let声明变量(ES6)</h3><p>为什么要有let？因为用var声明, 提升会打乱我们代码的执行顺序。</p><p>特点：</p><ol><li>let声明的变量不会提升(提升了但是没有初始化)</li><li>let会和{} 形成块级作用域</li><li>使用let声明的变量不会挂载在window上</li><li>使用let声明的变量不能重复声明</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>//情况1:未初始化
console.log(a);//Cannot access &#39;a&#39; before initialization
let a = 1;

//情况2:块级作用域
if (true) {
  let a = 1;
  console.log(a);//1  和{}形成块级作用域
}
console.log(a);//a is not defined

//情况3:不会挂载在window上
let a2 = 1;
console.log(window);
console.log(window.a2);

//情况4:不能重复声明，直接语法错误
var a;
var a;
let a;
let a;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-const声明常量-es6" tabindex="-1"><a class="header-anchor" href="#_3-const声明常量-es6" aria-hidden="true">#</a> （3）const声明常量(ES6)</h3><p>特点：</p><ol><li>const声明的变量不会提升</li><li>和{}会形成块级作用域</li><li>不会挂载window上</li><li><strong>声明的变量不能修改(常量)</strong>(常量可以是函数)</li><li><strong>const声明的变量必须赋值,只声明不赋值直接报错</strong></li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>//情况1:不能修改(常量)
const a = 100;
console.log(a);//100
a = 110;
console.log(a);//对常量变量赋值 Assignment to constant variable.

//情况2:必须赋值
var c;
let c;
const c;//报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-高阶函数" tabindex="-1"><a class="header-anchor" href="#五-高阶函数" aria-hidden="true">#</a> 五 高阶函数</h2><p>高阶函数定义：<strong>参数/return返回值为函数</strong>的函数</p><h3 id="_1-常见的内置高阶函数" tabindex="-1"><a class="header-anchor" href="#_1-常见的内置高阶函数" aria-hidden="true">#</a> （1）常见的内置高阶函数</h3><p>数组里一些参数为函数的方法是高阶函数：</p><ul><li>some() 一真全真</li><li>every() 一假全假</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>//some：
        let arr = [10, 20, 30, 40, 52];
        let flag = arr.some(item =&gt; item &lt; 51);
        console.log(flag); //输出结果true
 
//every：
        let arr1 = [11, 21, 31, 42, 51];
        let flag1 = arr.every(item =&gt; item &lt; 51);
        console.log(flag); //输出结果false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>forEach() 遍历数组</li><li>map() 映射/加工,返回新数组</li><li>filter()过滤,返回新数组</li><li>find()查找,返回值或者und</li><li>findIndex()查找索引,返回索引值或者-1</li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>var arr = [1, 5, 2, 3]
// 1.arr.forEach() 
//注意:不能对空数组进行检测 不能改变原数组
arr.forEach(function (item, index) {
  // item是循环的每一项,index是索引值
  console.log(item, &quot;循环的每一项&quot;);//1523
  console.log(index, &quot;循环的每一项的下标&quot;);//0123
})

// 2.arr.map()
// 注意:返回值是一个根据映射条件加工后的新数组,不能改变原数组
let res = arr.map(function (item, index, arr) {
  // arr:当前数组(可选参数)
  return item + &quot;hello&quot;
})
console.log(arr);//[1, 5, 2, 3]
console.log(res);//[&#39;1hello&#39;, &#39;5hello&#39;, ...]

// 3.arr.filter()
// return 后面是条件 条件为true的时候会返回到新数组当中
let res2 = arr.filter(function (item, index) {
  return item &gt; 2
  // return 10  // 10是true 返回整个数组
  // return 0  // 0是false 返回空数组
})
console.log(res2);//[5,3]

// 4.arr.find()
// 如果数组中有对应的元素则返回元素,如果没有则返回undefined
let res3 = arr.find(function (item, index) {
  // return item == 2
  return item == 0 //undefined
})
console.log(res3);

// 5.arr.findIndex()
// 如果数组中有对应的元素则返回元素的索引值,如果没有则返回-1
let res4 = arr.findIndex(function (item, index) {
  // return item == 2
  // return item == 1 //0
  return 0 //-1

})
console.log(res4);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-自定义封装高阶函数" tabindex="-1"><a class="header-anchor" href="#_2-自定义封装高阶函数" aria-hidden="true">#</a> （2）#自定义封装高阶函数</h3><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>        // 对于高阶函数来说 ,实际上传递的是函数的堆地址
        function fn(func) {
            func()
        }
        function gn() {
            console.log(&#39;gn..&#39;);
        }
        fn(gn)
        // 需要封装一个函数
        // 三个参数 这个函数的作用是计算  加 减 乘
        function calc(num1, num2, func) {
            return func(num1, num2)
        }
        // 相加
        function add(a, b) {
            return a + b
        }
        // 相减
        function sub(a, b) {
            return a - b
        }
        // 相乘
        function mul(a, b) {
            return a * b
        }
        console.log(calc(3, 4, add));
        console.log(calc(30, 40, sub));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-iife-立即执行函数表达式" tabindex="-1"><a class="header-anchor" href="#六-iife-立即执行函数表达式" aria-hidden="true">#</a> 六 IIFE 立即执行函数表达式</h2><blockquote><p>IIFE（immediately invoked function expression）主要作用: 立即执行函数</p></blockquote><p>两种不同写法:</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>(function fn1(形参) {
  console.log(&#39;fn1&#39;);
})(实参)//方法1:不包实参
(function fn1(形参) {
  console.log(&#39;fn1&#39;);
}(实参))//方法2:包实参

// 传参写法
; (function fn(a, b) {
    console.log(a);//1
    console.log(b);//2
})(1, 2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连续的IIFE需要加<code>; + - * / ! ~ ^</code>来防止报错</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;;fn1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token operator">+</span><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//- * / ! ~ ^也可以</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;+fn1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-闭包-closure" tabindex="-1"><a class="header-anchor" href="#七-闭包-closure" aria-hidden="true">#</a> 七 闭包（Closure）</h2><p>概念和理解：3种方式</p><ul><li>函数执行后,return结果是另外的函数并包含原本函数的变量,就形成了闭包。</li><li>一个本该被销毁的变量空间，由于其内部函数对其引用, 导致无法被销毁, 形成闭包</li><li>闭包允许函数访问并操作它被创建时的环境变量，即使它已经离开了那个环境</li></ul><p>优缺点:</p><ul><li>保护了变量,延长了变量的生命周期</li><li>扩大了变量的作用范围</li></ul><blockquote><ul><li>可产生多个闭包，每个闭包各自独立</li><li>同一闭包下的变量，连续调用，变量值会累积变化而非重置</li></ul></blockquote><p>缺点：导致内存泄漏(如果大量闭包产生的独立空间没有及时销毁)</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">gn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">++</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> gn
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> fn2 <span class="token operator">=</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment">//将a赋值为1</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//2 第一次调用gn()</span>
<span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//3 第二次调用gn()</span>
<span class="token comment">//除非重新函数赋值再调用才会重置，否则会累积变化</span>
<span class="token keyword">let</span> fn3 <span class="token operator">=</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token number">1</span>）<span class="token comment">//将a重新赋值为1</span>
<span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//2 第一次调用gn()</span>
<span class="token function">fn3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//3 第二次调用gn()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function createGreeting(greeting) {
  return function(name) {
    return greeting + &#39;, &#39; + name + &#39;!&#39;;
  };
}

const sayHello = createGreeting(&#39;Hello&#39;);
const sayGoodbye = createGreeting(&#39;Goodbye&#39;);

console.log(sayHello(&#39;Alice&#39;)); // 输出: Hello, Alice!
console.log(sayGoodbye(&#39;Bob&#39;)); // 输出: Goodbye, Bob!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 这是一个私有变量，外部无法直接访问</span>

  <span class="token comment">// 返回一个对象，包含三个方法，这些方法都是闭包</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 增加计数</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      count<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 减少计数</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getCount</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> count<span class="token punctuation">;</span> <span class="token comment">// 获取当前计数</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建一个计数器实例</span>
<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 0</span>
counter<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 1</span>
counter<span class="token punctuation">.</span><span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 0</span>
<span class="token comment">//不管在哪里调用闭包函数,其中所需的变量一定是闭包中的变量</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 0</span>
<span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">150</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>counter<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token comment">//不管在哪里调用counter函数,其中所需的变量一定是闭包中的count</span>
<span class="token punctuation">}</span>
<span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// 输出: 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八-this指向绑定" tabindex="-1"><a class="header-anchor" href="#八-this指向绑定" aria-hidden="true">#</a> 八 this指向绑定</h2><p>概念：this在不同的位置指的是不用的东西。this指向的东西和位置以及调用方式有关系。常见的this指向的是对象或者是window或者是其他事件源。</p><p>分类：</p><ol><li>默认绑定--直接this</li><li>隐式绑定--对象打点调用方法</li><li>显式绑定--call、apply、bind</li><li><strong>#new绑定</strong>--new</li></ol><p>this绑定优先级：new绑定&gt;显示绑定&gt;隐式绑定&gt;默认绑定</p><h3 id="_1-默认绑定" tabindex="-1"><a class="header-anchor" href="#_1-默认绑定" aria-hidden="true">#</a> （1）默认绑定</h3><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>//1.直接使用this=window
console.log(this);//window对象
//2.当一个函数独立调用时,此时里面的this是默认绑定,指向是window
function fn() {
  console.log(this);
}
fn()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-隐式绑定-掌握" tabindex="-1"><a class="header-anchor" href="#_2-隐式绑定-掌握" aria-hidden="true">#</a> （2）#隐式绑定(掌握)</h3><p>对象打点调用身上的方法-谁打点调用,this就指向谁</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 写法一:
var obj = {
  name: &quot;wang&quot;,
  fn: function () {
    console.log(this); //obj对象
  }
}
obj.fn()//obj对象
// 写法二:
var obj = {
  name: &quot;wang&quot;,
  fn // 等于fn: fn// key和value的名字一样时可以省略
}
function fn() {
  console.log(this);
}
obj.fn()//obj对象
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-显式绑定call-apply-bind" tabindex="-1"><a class="header-anchor" href="#_3-显式绑定call-apply-bind" aria-hidden="true">#</a> （3）显式绑定call() apply() bind()</h3><p>概念:用call.apply,bind把函数中的this明确绑定给对象</p><ul><li>call()与apply()都是<strong>一次性绑定</strong>,而且会直接调用,apply传参用数组[]</li><li>bind() 仅改变this指向但<strong>不调用</strong> 调用的话需要再() <strong>永久绑定</strong></li></ul><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function fn(a, b) {
  this.a = a
  this.b = b
  console.log(this);
}

//1.call() 作用:1.改变this指向   2.让函数执行
let callobj = {
  name: &#39;call&#39;,
  a: 0,//可以省略
  b: 0
}
fn.call(callobj, 1, 2)//{name: &#39;call&#39;, a: 1, b: 2}
fn()//window  不是永久改变,只改变一次

//2.apply() 作用:1.改变this指向   2.让函数执行
let applyobj = {
  name: &#39;apply&#39;
}
fn.apply(applyobj, [1, 2])//{name: &#39;apply&#39;, a: 1, b: 2}

//3.bind() 作用:1.改变this指向
let bindobj = {
  name: &#39;bind&#39;
}
let bind2 = fn.bind(bindobj, 1, 2)//会返回一个新的绑定好的this指向的函数
bind2()//永久指向 bind2里面的this永久指向bind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-new绑定-掌握" tabindex="-1"><a class="header-anchor" href="#_4-new绑定-掌握" aria-hidden="true">#</a> （4）<strong>#new绑定</strong>(掌握)</h3><p>概念: 通过new一个构造器(类)，生成一个<strong>实例化对象</strong>。里面的this指向发生了改变，指向生成的实例化对象。(类似于隐式绑定的谁调用this指向谁)</p><p>new运算符/操作符：</p><ol><li>创建出了一个实例化对象（开辟了一个新的堆空间）</li><li>让构造器中this指向新的实例化对象(指向了新的堆空间)</li><li>执行了构造函数，并retrun新的堆空间地址</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>function Car(carName, carColor) {//构造器
  this.carName = carName
  this.carColor = carColor
  this.running = function () {
    console.log(&#39;跑..&#39;);
  }
}

let car = new Car(&#39;大众&#39;, &quot;蓝色&quot;)//创建实例化对象car
console.log(car);//{carName: &#39;大众&#39;, carColor: &#39;蓝色&#39;, running: ƒ}
car1.running()//跑..
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-this指向特殊情况" tabindex="-1"><a class="header-anchor" href="#_5-this指向特殊情况" aria-hidden="true">#</a> （5）this指向特殊情况</h3><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 1.事件监听器中的this指向事件源
var divEle = document.querySelector(&#39;div&#39;)
divEle.onclick = function () {
  console.log(this);//会打印出整个div标签
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 2.定时器里的this指向window(无论定时器放在哪)
var obj = {
  fn: function () {
    console.log(this, &#39;这是定时器外面的this&#39;);//obj 隐式绑定 Object
    setTimeout(function () {
      console.log(this, &#39;这是定时器里面的this&#39;);//Window
    }, 1000)
  }
}
obj.fn()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 3.forEach里的this默认window;添加第二个参数时,则指向第二个参数
var arr = [1, 2, 3]
// 默认
arr.forEach(function () {
  console.log(this);//window
})
// 添加第二个参数时，改变第一个参数的this
arr.forEach(function (item) {
  if (item == 2) {
    this.age = 2//给对象添加了一个属性,age:2
  }
  console.log(this);//{ name: &quot;张三&quot;,age:2}
}, { name: &#39;张三&#39; })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>// 箭头函数中this不能被绑定,就当做默认绑定,直接使用this
var obj = {
  fn: function () {
    console.log(this);//obj
  },
  gn: () =&gt; {
    console.log(this);//window
  }
}
obj.fn()//obj
obj.gn()//window

class MyClass {//声明类中
  constructor() {
    this.value = &#39;MyClass instance&#39;;
    this.arrowFunction = () =&gt; {
      console.log(this.value); // 输出 &#39;MyClass instance&#39;
    };
  }
}

const myInstance = new MyClass();
myInstance.arrowFunction(); // 调用箭头函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="陷阱练习题" tabindex="-1"><a class="header-anchor" href="#陷阱练习题" aria-hidden="true">#</a> 陷阱练习题:</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> wc <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;wangcai&quot;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">eat</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//window</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> fn <span class="token operator">=</span> wc<span class="token punctuation">.</span>eat<span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这不是隐式绑定,没有()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> Wangcai <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Wangcai&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">show</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//zhangsan</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">f</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> fun <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>show<span class="token punctuation">;</span>
        <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//同上一题,不是隐式绑定</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
Wangcai<span class="token punctuation">.</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这是隐式绑定</span>

<span class="token comment">//另类隐式绑定陷阱</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//window,因为下面的return</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//obj2,最终留下这一行</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
obj2<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span>   
    <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">;</span>
obj3<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span><span class="token comment">//全局num变成60</span>
    num<span class="token operator">++</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//21</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//5</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//20</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">+=</span> n<span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//25</span>
        num<span class="token operator">++</span><span class="token punctuation">;</span><span class="token comment">//22//21+1从立即执行来的闭包num</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token comment">//22</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>obj3<span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>

obj3<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九" tabindex="-1"><a class="header-anchor" href="#九" aria-hidden="true">#</a> 九</h2>`,76);function m(k,b){const a=l("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[n("a",d,[s("↑上面的案例点此详解"),e(a)]),s("——"),n("a",r,[s("↓下面的案例点此详解"),e(a)])]),v])}const f=t(p,[["render",m],["__file","05JSAdvanced.html.vue"]]);export{f as default};
