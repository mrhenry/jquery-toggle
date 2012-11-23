# jquery-toggle

## How to use

### HTML

Data attributes toggle handler:

- data-toggle-target: A selector for the to toggle element


Data attribute for the toggle element:

- data-toggle-state: Set the initial state


```
<div class="container">
  <span class="toggle-btn" data-toggle-target="#target"></span>
  <div id="target" data-toggle-state="closed"></div>
</div>
```

### Javascript

```
$('.container').toggle({
  event:      'click',
  speed:      300,
  btn_class:  '.toggle-btn'
});
```
