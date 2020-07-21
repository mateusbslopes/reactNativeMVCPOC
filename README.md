# Test MVP with React

General insight:

There were examples working with react on MVP architecture, but there were none with redux. The complexity that this brings is the connection that redux make in order to update the component. This because the compoent recieve the data but who will be manipulating this is the presenter.

## Solution

As the example that i've based on there is a connector that is responsible to (as the name says) connect the presenter and the view. You can see that [here](src/utils/mvpBuilder.tsx).

Besides that was nescessary to set the view variable and the provider variable on the Provider and View respectively. That you can see on [Presenter implementation](./src/utils/presenter.ts) and [ViewWithProvider implementation](src/utils/viewWithProvider.ts). And, to me, the most complex part: update the data from the presenter whenever the redux was updated. This was accomplished on the method componentDidUpdate on [ViewWithProvider implementation](src/utils/viewWithProvider.ts)