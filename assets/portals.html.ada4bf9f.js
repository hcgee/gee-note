import{r as p,o as t,a as o,b as n,e,F as c,d as s,c as l}from"./app.8f076ec2.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"portals-\u5B9E\u73B0\u4E00\u4E2A-modal-\u6846",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#portals-\u5B9E\u73B0\u4E00\u4E2A-modal-\u6846","aria-hidden":"true"},"#"),s(" Portals \u5B9E\u73B0\u4E00\u4E2A Modal \u6846")],-1),k=s("\u5B98\u7F51 "),b={href:"https://react.docschina.org/docs/portals.html",target:"_blank",rel:"noopener noreferrer"},m=s("Portals"),d=l(`<h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token operator">&lt;</span>Modal
  title<span class="token operator">=</span><span class="token string">&quot;\u6DFB\u52A0\u597D\u53CB&quot;</span>
  visible<span class="token operator">=</span><span class="token punctuation">{</span>visible<span class="token punctuation">}</span>
  onCancel<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
  onOk<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\u6DFB\u52A0\u597D\u53CB<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Modal<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> js</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPortal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&quot;./index.module.less&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ModalProps</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** \u5BF9\u8BDD\u6846\u662F\u5426\u53EF\u89C1 */</span>
  visible<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u786E\u5B9A\u6309\u94AE loading */</span>
  confirmLoading<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u6807\u9898 */</span>
  title<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token operator">|</span> string<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE */</span>
  closable<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u70B9\u51FB\u786E\u5B9A\u56DE\u8C03 */</span>
  onOk<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u70B9\u51FB\u6A21\u6001\u6846\u53F3\u4E0A\u89D2\u53C9\u3001\u53D6\u6D88\u6309\u94AE\u3001Props.maskClosable \u503C\u4E3A true \u65F6\u7684\u906E\u7F69\u5C42\u6216\u952E\u76D8\u6309\u4E0B Esc \u65F6\u7684\u56DE\u8C03 */</span>
  onCancel<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  afterClose<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u5782\u76F4\u5C45\u4E2D */</span>
  centered<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u5BBD\u5EA6 */</span>
  width<span class="token operator">?</span><span class="token operator">:</span> string <span class="token operator">|</span> number<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u5E95\u90E8\u5185\u5BB9 */</span>
  footer<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u786E\u8BA4\u6309\u94AE\u6587\u5B57 */</span>
  okText<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u53D6\u6D88\u6309\u94AE\u6587\u5B57 */</span>
  cancelText<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** \u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED */</span>
  maskClosable<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Modal</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> ModalProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    visible<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
    title <span class="token operator">=</span> <span class="token string">&quot;\u6807\u9898&quot;</span><span class="token punctuation">,</span>
    onCancel<span class="token punctuation">,</span>
    closable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    width<span class="token punctuation">,</span>
    onOk<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>
  <span class="token comment">// \u5173\u95EDModal</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onCancelFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>onCancel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">onCancel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">Child</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">&quot;gee-modal-mask&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">&quot;gee-modal-wrap&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>div
            style<span class="token operator">=</span><span class="token punctuation">{</span>width <span class="token operator">?</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">&quot;gee-modal&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
          <span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">&quot;gee-modal-content&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">&quot;gee-modal-header&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">&quot;gee-modal-title&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token punctuation">{</span>closable <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>div
                    onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                      <span class="token function">onCancelFn</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">}</span>
                    className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">&quot;gee-modal-close&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
                  <span class="token operator">&gt;</span>
                    \u5173\u95ED
                  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
                <span class="token punctuation">)</span><span class="token punctuation">}</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">&quot;gee-modal-body&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">[</span><span class="token string">&quot;gee-modal-footer&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>button
                  onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token function">onCancelFn</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span><span class="token punctuation">}</span>
                <span class="token operator">&gt;</span>
                  \u53D6\u6D88
                <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>button
                  onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>onOk<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                      <span class="token function">onOk</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                      <span class="token function">onCancelFn</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                  <span class="token punctuation">}</span><span class="token punctuation">}</span>
                <span class="token operator">&gt;</span>
                  \u786E\u5B9A
                <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>visible <span class="token operator">&amp;&amp;</span> <span class="token function">createPortal</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Child <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br></div></div><h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.gee-modal-mask</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1000<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.45<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.gee-modal-wrap</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1000<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>

  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token selector">.gee-modal</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> 500ms slidein<span class="token punctuation">;</span>
    <span class="token selector">.gee-modal-content</span> <span class="token punctuation">{</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 4px 12px <span class="token function">rgb</span><span class="token punctuation">(</span>0 0 0 / 15%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token selector">.gee-modal-header</span> <span class="token punctuation">{</span>
        <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
        <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 16px 24px<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.65<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #e8e8e8<span class="token punctuation">;</span>
        <span class="token selector">.gee-modal-close</span> <span class="token punctuation">{</span>
          <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.gee-modal-body</span> <span class="token punctuation">{</span>
        <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
        <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
        <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.gee-modal-footer</span> <span class="token punctuation">{</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 10px 24px<span class="token punctuation">;</span>
        <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
        <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #e8e8e8<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> slidein</span> <span class="token punctuation">{</span>
  <span class="token selector">from</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">to</span> <span class="token punctuation">{</span>
    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div>`,6);function g(y,f){const a=p("ExternalLinkIcon");return t(),o(c,null,[i,n("p",null,[k,n("a",b,[m,e(a)])]),d],64)}var x=r(u,[["render",g]]);export{x as default};
