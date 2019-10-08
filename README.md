
## Content projection
Content projection is a way to import HTML content from outside the component and insert that content into the component’s template in a designated spo


## The problem ( When using NG-Content )

 The problem is that 'nested' components are immediately initialized and not destroyed when removed from DOM.

## Solution ( Using template outlet )

```js
<app-demo2 [content]='nestedContentRef'></app-demo2>

<ng-template #nestedContentRef>
	<app-nested-content></app-nested-content>
</ng-template>

```


[Example with loader](https://stackblitz.com/edit/angular-dscswb)
