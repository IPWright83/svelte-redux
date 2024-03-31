<script>
import { useSelector } from "../store/useSelector";
import { useDispatch } from "../store/useDispatch";
import { numActions } from "../store/createStore";
import StoreProvider from "../StoreProvider.svelte";

export let label = "test";

let count = useSelector((store) => store.count);

const dispatch = useDispatch();

function onClick(event) {
    dispatch(numActions.add());
}
</script>

<button type="button" class="btn" on:click={onClick}>
    {label}
</button>
{$count}

<style>
.btn {
    border: thin solid red;
}
</style>
