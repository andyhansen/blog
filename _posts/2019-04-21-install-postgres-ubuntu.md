## Installing PostgreSQL with UUID on Ubuntu

I've recently moved to Ubuntu for my work machine, and wanted to set up PostgreSQL using the [asdf](https://github.com/asdf-vm/asdf) version manager. As it turns out, it is not installed with UUID support out the box, so extra options need to be passed in.

This guide is for PostgreSQL version `9.6.12` with the [postgres plugin](https://github.com/smashedtoatoms/asdf-postgres) for [asdf](https://github.com/asdf-vm/asdf), on Ubuntu 19.04.

In short, the steps are:

1. [Install asdf](https://asdf-vm.com/#/core-manage-asdf-vm)
2. [Install the postgres plugin](https://github.com/smashedtoatoms/asdf-postgres#install)
3. Install UUID dependencies with `sudo apt-get install uuid-dev`
4. Run the command below to install
```bash
$ POSTGRES_EXTRA_CONFIGURE_OPTIONS="--with-uuid=e2fs" asdf install posgres 9.6.12
```

Once installed, follow [the steps in the plugin's readme](https://github.com/smashedtoatoms/asdf-postgres#run) to start postgres.

### How to remember those options
If you don't want to have to search for this blog post to copy paste these options every time, you can store the options in the `~/.asdf-postgres-configure-options` file. The contents will look like the following:


```bash
POSTGRES_EXTRA_CONFIGURE_OPTIONS="--with-uuid=e2fs"
```

#### If you use Datadog

We use [Datadog](https://www.datadoghq.com/) at work, so installing support for that is helpful. I do that by adding one extra option. As such, my `~/.asdf-postgres-configure-options` look like this:

```bash
POSTGRES_EXTRA_CONFIGURE_OPTIONS="--enable-dtrace --with-uuid=e2fs"
```

