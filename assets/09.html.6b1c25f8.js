import{c as n}from"./app.8f076ec2.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u6570\u7EC4\u53BB\u91CD</h1><blockquote><p>for \u5FAA\u73AF + indexOf</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> newarr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>newarr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newarr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5982\u679C\u6570\u7EC4\u91CC\u9762\u5B58\u7684\u662F\u5F15\u7528\u7C7B\u578B</span>
<span class="token comment">// let arr = [{name:&#39;hu&#39;,age:24},{name:&#39;hu1&#39;,age:44},{name:&#39;hu&#39;,age:24}];</span>
<span class="token comment">// let newarr = [];</span>
<span class="token comment">// for (let i = 0; i &lt; arr.length; i++) {</span>
<span class="token comment">//   if (newarr.indexOf(arr[i]) == -1) {</span>
<span class="token comment">//     newarr.push(arr[i]);</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p>\u6570\u7EC4\u91CC\u9762\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B</p></blockquote>`,4);function t(e,o){return p}var r=s(a,[["render",t]]);export{r as default};