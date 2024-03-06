defmodule SampleWeb.PageLive do
  use SampleWeb, :live_view

  def render(assigns) do
    ~H"""
    <div id="main" phx-hook="NativeBridge"></div>
    <h1>udid:<%= @udid %></h1>
    """
  end

  def mount(_params, _session, socket) do
    socket
    |> push_event("get_udid", %{})
    |> assign(:udid, "")
    |> then(&{:ok, &1})
  end

  def handle_event("receive", %{"message" => udid}, socket) do
    {:noreply, assign(socket, :udid, udid)}
  end
end
