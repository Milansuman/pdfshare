<div id="root">
    <nav>
        <h2>PDFSHARE</h2>
        <form method="get">
            <Search/>
        </form>
        <div>
            <a href="/login">Login</a>
            <a href="/signup">Sign Up</a>
        </div>
    </nav>
    <div id="collections">
        {#each data.collections as collection}
            <Collection thumbnail={collection.thumbnail} username={collection.username} title={collection.title} documents={collection.documents}/>
        {/each}
    </div>
</div>

<script>
    /** @type {import('./$types').PageData}*/
    import Search from "$lib/Search.svelte";
    import Collection from "$lib/Collection.svelte";
    export let data;
    
</script>

<style>
    #root{
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }

    nav{
        padding: 30px;
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        justify-content: space-between;

        & a{
            color: #ffffff;
            font-size: 1rem;
            
            background-color: #222222;
            padding: 15px;
            border-radius: 90px;
            text-decoration: none;
    
        }

        & div{
            display: flex;
            flex-direction: row;
            gap: 15px;
        }

    }
    
    form{
        width: 30%;
    }

    #collections{
        padding: 0px 30px 0px 30px;
        display: flex;
        flex-direction: row;
        gap: 12px;
        justify-content: center;
    }

</style>