import{c as n}from"./app.8f076ec2.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="hooks-\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#hooks-\u7406\u89E3" aria-hidden="true">#</a> hooks \u7406\u89E3</h1><h2 id="_1-\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6" aria-hidden="true">#</a> 1.\u521B\u5EFA\u4E00\u4E2A\u7EC4\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u51FD\u6570\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> setNum<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setNum</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_2-\u521B\u5EFA\u4E00\u4E2A-fiber-\u5BF9\u8C61\u6765\u7BA1\u7406\u7EC4\u4EF6\u4E2D\u7684\u72B6\u6001-statenode-\u4EE3\u8868\u5F53\u524D\u7BA1\u7406\u7684\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u4E00\u4E2A-fiber-\u5BF9\u8C61\u6765\u7BA1\u7406\u7EC4\u4EF6\u4E2D\u7684\u72B6\u6001-statenode-\u4EE3\u8868\u5F53\u524D\u7BA1\u7406\u7684\u7EC4\u4EF6" aria-hidden="true">#</a> 2.\u521B\u5EFA\u4E00\u4E2A fiber \u5BF9\u8C61\u6765\u7BA1\u7406\u7EC4\u4EF6\u4E2D\u7684\u72B6\u6001,stateNode \u4EE3\u8868\u5F53\u524D\u7BA1\u7406\u7684\u7EC4\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u521B\u5EFA\u4E00\u4E2Afiber\u5BF9\u8C61\u7BA1\u7406\u7EC4\u4EF6</span>
<span class="token keyword">const</span> fiber <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">stateNode</span><span class="token operator">:</span> App<span class="token punctuation">,</span>
  <span class="token literal-property property">memoizedState</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// \u5B58\u50A8hooks\uFF0C\u4EE5\u94FE\u8868\u5F62\u5F0F\u5B58\u5728</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u662F\u5426\u662F\u7B2C\u4E00\u6B21\u6E32\u67D3</span>
<span class="token keyword">let</span> isMount <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// \u6307\u5411\u5F53\u524D\u7684hook</span>
<span class="token keyword">let</span> workInprogressHook <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_3-\u521B\u5EFA\u4E00\u4E2A\u8C03\u5EA6\u5668\u51FD\u6570\u6765\u6E32\u67D3\u66F4\u65B0\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA\u4E00\u4E2A\u8C03\u5EA6\u5668\u51FD\u6570\u6765\u6E32\u67D3\u66F4\u65B0\u7EC4\u4EF6" aria-hidden="true">#</a> 3.\u521B\u5EFA\u4E00\u4E2A\u8C03\u5EA6\u5668\u51FD\u6570\u6765\u6E32\u67D3\u66F4\u65B0\u7EC4\u4EF6</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u8C03\u5EA6\u5668\u51FD\u6570\u6765\u6E32\u67D3\u66F4\u65B0\u7EC4\u4EF6</span>
<span class="token keyword">function</span> <span class="token function">schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6BCF\u6B21\u6E32\u67D3\u83B7\u53D6\u72B6\u6001</span>
  workInprogressHook <span class="token operator">=</span> fiber<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> fiber<span class="token punctuation">.</span><span class="token function">stateNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  isMount <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> app<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_4-\u5B9E\u73B0-usestate" tabindex="-1"><a class="header-anchor" href="#_4-\u5B9E\u73B0-usestate" aria-hidden="true">#</a> 4.\u5B9E\u73B0 useState</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// useState</span>
<span class="token keyword">function</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token parameter">initialState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> hook<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * \u83B7\u53D6\u5F53\u524Dhooks-\u72B6\u6001-start
   */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isMount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7B2C\u4E00\u6B21\u6E32\u67D3</span>
    hook <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">memoizedState</span><span class="token operator">:</span> initialState<span class="token punctuation">,</span>
      <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">queue</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u961F\u5217\uFF0C\u7528\u6765\u5B58\u50A8aciton</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fiber<span class="token punctuation">.</span>memoizedState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7B2C\u4E00\u4E2AuseState</span>
      fiber<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> hook<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// workInprogressHook\u6307\u5411\u4E0A\u4E00\u4E2Ahook</span>
      workInprogressHook<span class="token punctuation">.</span>next <span class="token operator">=</span> hook<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u6307\u5411\u5F53\u524Dhook</span>
    workInprogressHook <span class="token operator">=</span> hook<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u66F4\u65B0</span>
    <span class="token comment">// 1.\u83B7\u53D6\u5230hook\u94FE\u8868</span>
    hook <span class="token operator">=</span> workInprogressHook<span class="token punctuation">;</span>
    <span class="token comment">// 2.\u6307\u5411\u4E0B\u4E00\u4E2A</span>
    workInprogressHook <span class="token operator">=</span> workInprogressHook<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * \u83B7\u53D6\u5F53\u524Dhooks-\u72B6\u6001-end
   */</span>

  <span class="token comment">// todo \u5B9E\u73B0useState\u7684\u66F4\u65B0\u51FD\u6570action</span>
  <span class="token keyword">let</span> baseState <span class="token operator">=</span> hook<span class="token punctuation">.</span>memoizedState<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>hook<span class="token punctuation">.</span>queue<span class="token punctuation">.</span>padding<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u7B2C\u4E00\u4E2A</span>
    <span class="token keyword">let</span> firstUpdate <span class="token operator">=</span> hook<span class="token punctuation">.</span>queue<span class="token punctuation">.</span>padding<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

    <span class="token keyword">do</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> action <span class="token operator">=</span> firstUpdate<span class="token punctuation">.</span>action<span class="token punctuation">;</span>
      <span class="token comment">// \u6267\u884CuseState\u7684\u66F4\u65B0</span>
      baseState <span class="token operator">=</span> <span class="token function">action</span><span class="token punctuation">(</span>baseState<span class="token punctuation">)</span><span class="token punctuation">;</span>
      firstUpdate <span class="token operator">=</span> firstUpdate<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token comment">// \u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u76F8\u7B49\u4EE3\u8868\u8D70\u5B8C\u4E86</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>firstUpdate <span class="token operator">!=</span> hook<span class="token punctuation">.</span>queue<span class="token punctuation">.</span>padding<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u6240\u6709\u7684hook\u66F4\u65B0\u90FD\u6267\u884C\u5B8C\u4E4B\u540E\u91CD\u7F6E</span>
    hook<span class="token punctuation">.</span>queue<span class="token punctuation">.</span>padding <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  hook<span class="token punctuation">.</span>memoizedState <span class="token operator">=</span> baseState<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>baseState<span class="token punctuation">,</span> <span class="token function">dispatchAction</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> hook<span class="token punctuation">.</span>queue<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h2 id="_5-dispatchaction-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_5-dispatchaction-\u51FD\u6570" aria-hidden="true">#</a> 5.dispatchAction \u51FD\u6570</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">dispatchAction</span><span class="token punctuation">(</span><span class="token parameter">queue<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> update <span class="token operator">=</span> <span class="token punctuation">{</span>
    action<span class="token punctuation">,</span>
    <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>padding <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    update<span class="token punctuation">.</span>next <span class="token operator">=</span> queue<span class="token punctuation">.</span>padding<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    queue<span class="token punctuation">.</span>padding<span class="token punctuation">.</span>next <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  queue<span class="token punctuation">.</span>padding <span class="token operator">=</span> update<span class="token punctuation">;</span>
  <span class="token function">schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_6-\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_6-\u6D4B\u8BD5" aria-hidden="true">#</a> 6.\u6D4B\u8BD5</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>app <span class="token operator">=</span> <span class="token function">schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">onClick1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,13);function e(t,o){return p}var u=s(a,[["render",e]]);export{u as default};
